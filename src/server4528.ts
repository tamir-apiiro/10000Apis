
const express = require('express')
import {handler4528} from "./handler4528";
const app = express()
app.get('/4528', handler4528)
app.listen(3000, () => {})
        