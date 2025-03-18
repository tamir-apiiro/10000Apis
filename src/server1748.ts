
const express = require('express')
import {handler1748} from "./handler1748";
const app = express()
app.get('/1748', handler1748)
app.listen(3000, () => {})
        