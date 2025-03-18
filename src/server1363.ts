
const express = require('express')
import {handler1363} from "./handler1363";
const app = express()
app.get('/1363', handler1363)
app.listen(3000, () => {})
        