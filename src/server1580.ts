
const express = require('express')
import {handler1580} from "./handler1580";
const app = express()
app.get('/1580', handler1580)
app.listen(3000, () => {})
        