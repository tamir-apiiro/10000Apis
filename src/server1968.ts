
const express = require('express')
import {handler1968} from "./handler1968";
const app = express()
app.get('/1968', handler1968)
app.listen(3000, () => {})
        