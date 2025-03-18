
const express = require('express')
import {handler821} from "./handler821";
const app = express()
app.get('/821', handler821)
app.listen(3000, () => {})
        