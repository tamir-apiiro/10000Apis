
const express = require('express')
import {handler1725} from "./handler1725";
const app = express()
app.get('/1725', handler1725)
app.listen(3000, () => {})
        