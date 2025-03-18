
const express = require('express')
import {handler9488} from "./handler9488";
const app = express()
app.get('/9488', handler9488)
app.listen(3000, () => {})
        