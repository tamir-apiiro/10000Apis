
const express = require('express')
import {handler5624} from "./handler5624";
const app = express()
app.get('/5624', handler5624)
app.listen(3000, () => {})
        