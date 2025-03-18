
const express = require('express')
import {handler4641} from "./handler4641";
const app = express()
app.get('/4641', handler4641)
app.listen(3000, () => {})
        