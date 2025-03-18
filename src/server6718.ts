
const express = require('express')
import {handler6718} from "./handler6718";
const app = express()
app.get('/6718', handler6718)
app.listen(3000, () => {})
        