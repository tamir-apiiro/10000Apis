
const express = require('express')
import {handler1864} from "./handler1864";
const app = express()
app.get('/1864', handler1864)
app.listen(3000, () => {})
        