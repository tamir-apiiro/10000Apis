
const express = require('express')
import {handler1847} from "./handler1847";
const app = express()
app.get('/1847', handler1847)
app.listen(3000, () => {})
        