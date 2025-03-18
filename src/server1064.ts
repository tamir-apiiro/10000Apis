
const express = require('express')
import {handler1064} from "./handler1064";
const app = express()
app.get('/1064', handler1064)
app.listen(3000, () => {})
        