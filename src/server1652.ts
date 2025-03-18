
const express = require('express')
import {handler1652} from "./handler1652";
const app = express()
app.get('/1652', handler1652)
app.listen(3000, () => {})
        