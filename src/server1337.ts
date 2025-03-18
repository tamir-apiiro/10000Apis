
const express = require('express')
import {handler1337} from "./handler1337";
const app = express()
app.get('/1337', handler1337)
app.listen(3000, () => {})
        