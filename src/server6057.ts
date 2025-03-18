
const express = require('express')
import {handler6057} from "./handler6057";
const app = express()
app.get('/6057', handler6057)
app.listen(3000, () => {})
        