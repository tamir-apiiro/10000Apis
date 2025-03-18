
const express = require('express')
import {handler5698} from "./handler5698";
const app = express()
app.get('/5698', handler5698)
app.listen(3000, () => {})
        