
const express = require('express')
import {handler4732} from "./handler4732";
const app = express()
app.get('/4732', handler4732)
app.listen(3000, () => {})
        