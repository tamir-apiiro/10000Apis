
const express = require('express')
import {handler1935} from "./handler1935";
const app = express()
app.get('/1935', handler1935)
app.listen(3000, () => {})
        