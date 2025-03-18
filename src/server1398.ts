
const express = require('express')
import {handler1398} from "./handler1398";
const app = express()
app.get('/1398', handler1398)
app.listen(3000, () => {})
        