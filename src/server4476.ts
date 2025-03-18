
const express = require('express')
import {handler4476} from "./handler4476";
const app = express()
app.get('/4476', handler4476)
app.listen(3000, () => {})
        