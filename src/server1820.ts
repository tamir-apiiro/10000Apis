
const express = require('express')
import {handler1820} from "./handler1820";
const app = express()
app.get('/1820', handler1820)
app.listen(3000, () => {})
        