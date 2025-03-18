
const express = require('express')
import {handler1432} from "./handler1432";
const app = express()
app.get('/1432', handler1432)
app.listen(3000, () => {})
        