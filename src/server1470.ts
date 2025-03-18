
const express = require('express')
import {handler1470} from "./handler1470";
const app = express()
app.get('/1470', handler1470)
app.listen(3000, () => {})
        