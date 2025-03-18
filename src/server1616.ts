
const express = require('express')
import {handler1616} from "./handler1616";
const app = express()
app.get('/1616', handler1616)
app.listen(3000, () => {})
        