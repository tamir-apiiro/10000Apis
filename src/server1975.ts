
const express = require('express')
import {handler1975} from "./handler1975";
const app = express()
app.get('/1975', handler1975)
app.listen(3000, () => {})
        