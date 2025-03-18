
const express = require('express')
import {handler5954} from "./handler5954";
const app = express()
app.get('/5954', handler5954)
app.listen(3000, () => {})
        