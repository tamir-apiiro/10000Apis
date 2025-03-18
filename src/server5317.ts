
const express = require('express')
import {handler5317} from "./handler5317";
const app = express()
app.get('/5317', handler5317)
app.listen(3000, () => {})
        