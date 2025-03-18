
const express = require('express')
import {handler5390} from "./handler5390";
const app = express()
app.get('/5390', handler5390)
app.listen(3000, () => {})
        