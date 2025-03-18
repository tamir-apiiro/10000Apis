
const express = require('express')
import {handler5534} from "./handler5534";
const app = express()
app.get('/5534', handler5534)
app.listen(3000, () => {})
        