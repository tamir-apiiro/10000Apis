
const express = require('express')
import {handler1821} from "./handler1821";
const app = express()
app.get('/1821', handler1821)
app.listen(3000, () => {})
        