
const express = require('express')
import {handler1690} from "./handler1690";
const app = express()
app.get('/1690', handler1690)
app.listen(3000, () => {})
        