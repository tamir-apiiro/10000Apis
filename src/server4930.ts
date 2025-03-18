
const express = require('express')
import {handler4930} from "./handler4930";
const app = express()
app.get('/4930', handler4930)
app.listen(3000, () => {})
        