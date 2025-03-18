
const express = require('express')
import {handler1945} from "./handler1945";
const app = express()
app.get('/1945', handler1945)
app.listen(3000, () => {})
        