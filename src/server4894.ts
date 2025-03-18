
const express = require('express')
import {handler4894} from "./handler4894";
const app = express()
app.get('/4894', handler4894)
app.listen(3000, () => {})
        