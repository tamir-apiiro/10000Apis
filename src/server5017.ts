
const express = require('express')
import {handler5017} from "./handler5017";
const app = express()
app.get('/5017', handler5017)
app.listen(3000, () => {})
        