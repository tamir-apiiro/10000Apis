
const express = require('express')
import {handler6935} from "./handler6935";
const app = express()
app.get('/6935', handler6935)
app.listen(3000, () => {})
        