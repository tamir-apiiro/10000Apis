
const express = require('express')
import {handler2162} from "./handler2162";
const app = express()
app.get('/2162', handler2162)
app.listen(3000, () => {})
        