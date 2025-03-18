
const express = require('express')
import {handler1605} from "./handler1605";
const app = express()
app.get('/1605', handler1605)
app.listen(3000, () => {})
        