
const express = require('express')
import {handler9069} from "./handler9069";
const app = express()
app.get('/9069', handler9069)
app.listen(3000, () => {})
        