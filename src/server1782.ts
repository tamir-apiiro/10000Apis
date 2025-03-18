
const express = require('express')
import {handler1782} from "./handler1782";
const app = express()
app.get('/1782', handler1782)
app.listen(3000, () => {})
        