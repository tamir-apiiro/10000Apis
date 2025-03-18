
const express = require('express')
import {handler1519} from "./handler1519";
const app = express()
app.get('/1519', handler1519)
app.listen(3000, () => {})
        