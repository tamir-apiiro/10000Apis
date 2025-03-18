
const express = require('express')
import {handler6433} from "./handler6433";
const app = express()
app.get('/6433', handler6433)
app.listen(3000, () => {})
        