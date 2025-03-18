
const express = require('express')
import {handler1972} from "./handler1972";
const app = express()
app.get('/1972', handler1972)
app.listen(3000, () => {})
        