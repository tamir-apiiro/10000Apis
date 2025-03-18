
const express = require('express')
import {handler1059} from "./handler1059";
const app = express()
app.get('/1059', handler1059)
app.listen(3000, () => {})
        