
const express = require('express')
import {handler1155} from "./handler1155";
const app = express()
app.get('/1155', handler1155)
app.listen(3000, () => {})
        