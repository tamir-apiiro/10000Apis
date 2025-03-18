
const express = require('express')
import {handler1977} from "./handler1977";
const app = express()
app.get('/1977', handler1977)
app.listen(3000, () => {})
        