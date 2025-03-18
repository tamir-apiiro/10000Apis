
const express = require('express')
import {handler6132} from "./handler6132";
const app = express()
app.get('/6132', handler6132)
app.listen(3000, () => {})
        