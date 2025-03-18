
const express = require('express')
import {handler1225} from "./handler1225";
const app = express()
app.get('/1225', handler1225)
app.listen(3000, () => {})
        