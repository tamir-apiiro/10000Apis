
const express = require('express')
import {handler4590} from "./handler4590";
const app = express()
app.get('/4590', handler4590)
app.listen(3000, () => {})
        