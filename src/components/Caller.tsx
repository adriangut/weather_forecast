import React, { useCallback, useState } from 'react';
import { getForecast } from '../clients/weather';
import { ComboBox, IComboBoxOption, IComboBoxProps, IconButton, Stack, TextField } from 'office-ui-fabric-react';
import { useAsync, useThrottle } from 'react-use';
import { LANGS_DICT, LANGUAGE_KEYS } from '../utils/langs';
import { Charts } from './Charts';

const LANGS_OPTIONS: IComboBoxOption[] = Object.entries(LANGS_DICT).map(([lang, langName]) => ({ key: lang, text: langName }));

export const Caller = () => {
    const [search, setSearch] = useState('');
    const [lang, setLang] = useState<LANGUAGE_KEYS>();
    const handleLangChange: IComboBoxProps['onChange'] = useCallback(
        (_ev, option) => setLang(option?.key ? String(option?.key) as LANGUAGE_KEYS : undefined),
        [],
    );
    const setSearchValue = useCallback((_ev, value) => setSearch(value), []);
    const throttledSearch = useThrottle(search);
    const forecast = useAsync(async () => {
        if (!throttledSearch) return undefined;
        return await getForecast(throttledSearch, lang);
    }, [throttledSearch, lang ?? 'en']);

    return (
        <Stack tokens={{ childrenGap: 20 }}>
            <Stack grow={true} horizontal={true} tokens={{ childrenGap: 15 }}>
                <Stack grow={4}>
                    <TextField
                        defaultValue={search}
                        onChange={setSearchValue}
                        placeholder="Start typing your area of interest..."
                    />
                </Stack>
                <ComboBox placeholder="Select language..." options={LANGS_OPTIONS} selectedKey={lang} onChange={handleLangChange} />
                <IconButton iconProps={{ iconName: 'plus' }} label="Add favourite" />
            </Stack>

            <Charts width={600} height={300} data={forecast.value?.list} />
        </Stack>
    );
}
