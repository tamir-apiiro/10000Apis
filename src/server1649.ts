
const express = require('express')
import {handler1649} from "./handler1649";
const app = express()
app.get('/1649', handler1649)
app.listen(3000, () => {})
        