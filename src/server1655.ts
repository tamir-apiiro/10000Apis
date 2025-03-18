
const express = require('express')
import {handler1655} from "./handler1655";
const app = express()
app.get('/1655', handler1655)
app.listen(3000, () => {})
        